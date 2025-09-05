import { APIProvider } from "@vis.gl/react-google-maps";
import { useLocation, useNavigate } from "react-router";
import { styled } from "styled-components";

const StyledScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const Screen = ({ MainContent }: { MainContent: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <StyledScreen>
      <Menu>
        <button
          onClick={() => {
            navigate("/tab1");
          }}
          disabled={location.pathname === "/tab1"}
        >
          First page
        </button>
        <button
          onClick={() => {
            navigate("/tab2");
          }}
          disabled={location.pathname === "/tab2"}
        >
          Second page
        </button>
      </Menu>

      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY!}>
        <Content>{MainContent}</Content>
      </APIProvider>
    </StyledScreen>
  );
};
