import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';



type InputWithIcon = {className: string, children: React.ReactNode, value: string, onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>, label: String}


export default function InputWithIcon({className, children, value, onChange}: InputWithIcon) {
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