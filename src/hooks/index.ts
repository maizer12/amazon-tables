import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, RootDispatch } from '../store';

export const useAppDispatch = () => useDispatch<RootDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
