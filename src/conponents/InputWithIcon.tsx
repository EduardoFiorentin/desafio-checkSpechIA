import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import { CircleUserRound } from 'lucide-react';



type InputWithIcon = {className: string, children: React.ReactNode, value: string, onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>, label: String}


export default function InputWithIcon({className, children, value, onChange, label}: InputWithIcon) {
  return (
      <TextField
        id="input-with-icon-textfield"
        className={'w-full font-imprima bg-inputblue rounded' + className}
        // label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" id="inputAdornment" style={{paddingLeft: 0}}>
              {children}
            </InputAdornment>
          ),
        }}
        // label="Nome"
        variant="outlined"
        value={value}
        onChange={onChange}
      />
  );
}