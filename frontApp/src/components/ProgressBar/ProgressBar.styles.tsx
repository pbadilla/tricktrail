import styled from "styled-components";

// import styled from "styled-components";

// const StyledButton = styled.button`
//   min-width: 200px;
//   border: none;
//   font-size: 18px;
//   padding: 7px 10px;
//   /* The resulting background color will be based on the bg props. */
//   background-color: ${props => props.bg === "black" ? "black" : "blue";
// `;


export const containerStyles = styled.div`
  height: 20;
  width: '100%';
  background-color: "#02bc9c";
  borderRadius: 50;
  margin: 5;
`;

export const fillerStyles = styled.span`
  height: "100%";
  background-color: green;
  borderRadius: "inherit";
  text-align: "right";
`;

export const labelStyles = styled.div`
  padding: 5;
  color: white
  font-weight: bold;
`;

const containerStyles = {
  height: 20,
  width: "100%",
  backgroundColor: "#e6fdf9",
  borderRadius: 50,
  margin: 5,
};

const fillerStyles = {
  height: "100%",
  width: `${completed}%`,
  backgroundColor: bgcolor,
  borderRadius: "inherit",
  transition: "width 1s ease-in-out",
  textAlign: "right" as const,
};

const labelStyles = {
  padding: 5,
  color: "white",
  fontWeight: "bold" as const,
};