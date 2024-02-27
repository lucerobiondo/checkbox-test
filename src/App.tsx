import React, { useState } from 'react';
import './App.css';
import {
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@mui/material"
import { checkItems } from './utils';
import { Checkboxes } from './utils/types';
import { CheckboxContainer, CustomCointainer } from './utils/styled/boxes';

function App() {

  const [checkboxData, setCheckboxData] = useState<Checkboxes[]>(checkItems);

  const handleSelect = (index: number) => {

    setCheckboxData((prevData: Checkboxes[]) => {
      const newData = [...prevData];

      newData[index].state = !prevData[index].state;

      if (newData[index].typeSelector === "all") {
        newData.slice(1).forEach((item) => (item.state = newData[0].state));
      } else {
        newData.slice(1).forEach((item) => (newData[0].state = item.state));
      }

      return newData;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <CustomCointainer>
          <FormGroup>
            {
              checkboxData.map((item: Checkboxes, index: number) => {
                return (
                  <CheckboxContainer key={index}>
                    <FormControlLabel
                      control={<Checkbox
                        onChange={() => handleSelect(index)}
                        sx={{
                          '& .MuiSvgIcon-root': {
                            fontSize: 21,
                            color: "blue"
                          }
                        }}
                        checked={item.state}
                        value={item.state} />}
                      label={item.value} />
                  </CheckboxContainer>
                )
              })
            }
          </FormGroup>
        </CustomCointainer>
      </header>
    </div>
  );
}

export default App;
