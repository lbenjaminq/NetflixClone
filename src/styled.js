import styled from "styled-components";
import { InputBase } from "@material-ui/core";

const handleWidth = (wide) => {
  switch (wide) {
    case "large":
      return "100%";
    case "medium":
      return "260px";
    default:
      return "160px";
  }
};

export const NetflixInput = styled(InputBase)`
  z-index: 30;
  height: 50px;
  background: #fff;
  padding: 10px;
`;

export const NetflixButton = styled.button`
  background-color: red;
  width: ${({ wide }) => handleWidth(wide)};
  height: 50px;
  border:none;
  border-radius: ${(props)=>(props.radius ? "5px" : null)};
  color: white;
  padding: 10px;
  z-index: 30;
  font-size: 1.1rem;
  cursor:pointer
`;
