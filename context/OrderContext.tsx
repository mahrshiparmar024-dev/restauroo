'use client';

import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
  type Dispatch,
} from 'react';
import type { Dish } from '@/lib/menuData';

// ── Types ──
export interface OrderItem {
  dish: Dish;
  quantity: number;
}

export interface OrderState {
  items: OrderItem[];
  status: 'idle' | 'submitting' | 'success';
  orderNumber: string | null;
  discountCode: string | null;
  discountAmount: number;
}

export type OrderAction =
  | { type: 'ADD_ITEM'; dish: Dish }
  | { type: 'REMOVE_ITEM'; dishId: string }
  | { type: 'UPDATE_QUANTITY'; dishId: string; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'APPLY_DISCOUNT'; code: string; amount: number }
  | { type: 'REMOVE_DISCOUNT' }
  | { type: 'SUBMIT_ORDER'; orderNumber: string }
  | { type: 'RESET' };

// ── Initial State ──
const initialState: OrderState = {
  items: [],
  status: 'idle',
  orderNumber: null,
  discountCode: null,
  discountAmount: 0,
};

// ── Reducer ──
function orderReducer(state: OrderState, action: OrderAction): OrderState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) => item.dish.id === action.dish.id
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.dish.id === action.dish.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { dish: action.dish, quantity: 1 }],
      };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.dish.id !== action.dishId),
      };

    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.dish.id !== action.dishId),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.dish.id === action.dishId
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        discountCode: null,
        discountAmount: 0,
      };

    case 'APPLY_DISCOUNT':
      return {
        ...state,
        discountCode: action.code,
        discountAmount: action.amount,
      };

    case 'REMOVE_DISCOUNT':
      return {
        ...state,
        discountCode: null,
        discountAmount: 0,
      };

    case 'SUBMIT_ORDER':
      return {
        ...state,
        status: 'success',
        orderNumber: action.orderNumber,
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

// ── Context ──
interface OrderContextValue {
  state: OrderState;
  dispatch: Dispatch<OrderAction>;
  itemCount: number;
  subtotal: number;
  tax: number;
  total: number;
}

const OrderContext = createContext<OrderContextValue | null>(null);

// ── Provider ──
export function OrderProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const rawSubtotal = state.items.reduce(
    (sum, item) => sum + item.dish.price * item.quantity,
    0
  );

  const subtotal = Math.max(0, rawSubtotal - state.discountAmount);
  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  return (
    <OrderContext.Provider value={{ state, dispatch, itemCount, subtotal, tax, total }}>
      {children}
    </OrderContext.Provider>
  );
}

// ── Hook ──
export function useOrder(): OrderContextValue {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
}
