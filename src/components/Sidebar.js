import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItemsData } from "../data/SidebarData";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";
import { useHistory } from "react-router-dom";

function Sidebar(props) {
  const history = useHistory();

  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };

  const addChannel = () => {
    const promptName = prompt("Enter Channel Name");
    if (promptName) {
      db.collection("rooms").add({
        name: promptName,
      });
    }
  };

  return (
    <Container>
      <WorkspaceContainer>
        <Name>CleverProgrammer</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChanels>
        {sidebarItemsData.map((item) => (
          <MainChannelItem>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChanels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon onClick={addChannel} />
        </NewChannelContainer>
        <ChannelList>
          {props.rooms.map((item) => (
            <Channel onClick={() => goToChannel(item.id)}>
              # {item.name}
            </Channel>
          ))}
        </ChannelList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #ea9215;
`;

const WorkspaceContainer = styled.div`
  color: white;
  height: 63px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #c87d12;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChanels = styled.div`
  padding-top: 20px;
`;

const MainChannelItem = styled.div`
  color: white;
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #c87d12;
  }
`;

const ChannelsContainer = styled.div`
  color: white;
  margin-top: 30px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  heidght: 28px;
  padding-left: 19px;
  padding-right: 12px;
  cursor: pointer;
`;

const ChannelList = styled.div``;

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #c87d12;
  }
`;
