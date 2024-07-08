
import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <Alert severity="error" sx={{ mt: 2 }}>
    <AlertTitle>Error</AlertTitle>
    {message}
  </Alert>
);

export default ErrorMessage;