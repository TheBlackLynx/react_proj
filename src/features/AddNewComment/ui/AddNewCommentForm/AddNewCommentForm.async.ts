import { lazy, FC } from 'react';
import { AddNewCommentFormProps } from './AddNewCommentForm';

export const AddNewCommentFormAsync = 
lazy <FC<AddNewCommentFormProps>>(() => new Promise((resolve) => {
  resolve(import('./AddNewCommentForm'));
}));