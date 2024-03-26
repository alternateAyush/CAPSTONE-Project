import { toast } from 'react-toastify';
export const success = (msg) => toast.success(msg,{autoClose:1000});
export const error = (msg) => toast.error(msg,{autoClose:1000});