import React from "react";
import styled from "styled-components";
import perfectSize from "./ScreenSize.jsx";
import CircularProgress from "react-native-circular-progress-indicator";
export default function App() {
  return (
    <Container>
      <Bg source={require("./BG.png")} />
      <UserContent>
        <TextContent>
          <Ava />
          <NickAndRatingContainer>
            <NickName>User</NickName>
            <RatingTextContent>
              <Rating>Rating :</Rating>
              <Rating style={{ color: "#E26B50" }}> 760</Rating>
              <Arrow
                style={{
                  marginTop: perfectSize(10),
                  marginLeft: perfectSize(6),
                }}
                source={require("./arrow.png")}
              />
              <PercentText>10%</PercentText>
            </RatingTextContent>
          </NickAndRatingContainer>
        </TextContent>
        <SettingsIcon source={require("./Setting.png")} />
      </UserContent>

      <Profile>Profile</Profile>

      <Chart>
        <CircularProgress
          value={250}
          radius={100}
          duration={2000}
          textColor={"#ecf0f1"}
          maxValue={400}
          title={"games"}
          activeStrokeWidth={12}
          inActiveStrokeWidth={12}
          titleColor={"white"}
          titleStyle={{ fontWeight: "bold" }}
          activeStrokeColor={"#39A3F0"}
          activeStrokeSecondaryColor={"#1AC02B"}
        />
        <StatsContent>
          <StatsContainer>
            <WinsCircle style={{ backgroundColor: "#1AC02A" }} />
            <Wins>WINS </Wins>
            <PercentTxt> 40%</PercentTxt>
          </StatsContainer>
          <StatsContainer>
            <WinsCircle style={{ backgroundColor: "#E26B50" }} />

            <Loses>LOSES</Loses>
            <PercentTxt>30%</PercentTxt>
          </StatsContainer>
          <StatsContainer>
            <WinsCircle style={{ backgroundColor: "#403A3C" }} />

            <Pats>PATS </Pats>
            <PercentTxt style={{ marginLeft: perfectSize(35) }}>
              {" "}
              30%
            </PercentTxt>
          </StatsContainer>
        </StatsContent>
      </Chart>

      <AllTime>ALL TIME</AllTime>
      <RewardsView>
        <RewardsIcon source={require("./krug.png")} />
        <Rewards>Rewards per victory</Rewards>
        <RewardsNumber>0.1</RewardsNumber>
      </RewardsView>
      <BorderTabs>
        <FriendsView>
          <FriendsIcon source={require("./Friend.png")} />
          <FriendsTextContent>
            <Friends>Friends</Friends>
            <FriendsCounter>546</FriendsCounter>
          </FriendsTextContent>
        </FriendsView>
        <AddFriendView>
          <AddFriendIcon source={require("./user-add-line.png")} />
          <AddFriend>Add Friend</AddFriend>
        </AddFriendView>
      </BorderTabs>
      <BorderTabs>
        <BalanceView>
          <Balance>Balance</Balance>
          <GraphBg>
            <ChartImg source={require("./Chart.png")} />

            <CircularProgress
              value={32}
              radius={32}
              duration={2000}
              textColor={"#ecf0f1"}
              maxValue={100}
              valueSuffix={"%"}
              activeStrokeWidth={7}
              inActiveStrokeWidth={7}
              titleColor={"white"}
              titleStyle={{ fontWeight: "bold" }}
              activeStrokeColor={"#E323FF"}
              activeStrokeSecondaryColor={"#7517F8"}
              //mt15
            />
          </GraphBg>
          <BalanceText>
            <BalanceNum>15</BalanceNum>
            <Arrow
              style={{ marginLeft: perfectSize(6) }}
              source={require("./arrow.png")}
            />
            <PercentText>10%</PercentText>
          </BalanceText>
        </BalanceView>
        <AwardsView>
          <Awards>Awards</Awards>
          <AwardsBg
            style={{ width: perfectSize(135), height: perfectSize(153) }}
            source={require("./Rectangle2658.png")}
          />
        </AwardsView>
      </BorderTabs>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  align-items: center;
`;
const Bg = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const UserContent = styled.View`
  margin-top: ${perfectSize(49)}px;
  padding-left: ${perfectSize(31)}px;
  padding-right: ${perfectSize(31)}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TextContent = styled.View`
  flex-direction: row;
`;
const Ava = styled.View`
  height: ${perfectSize(47)}px;
  width: ${perfectSize(47)}px;
  border-radius: ${perfectSize(47 / 2)}px;
  background-color: gray;
`;
const NickAndRatingContainer = styled.View`
  margin-left: ${perfectSize(9)}px;
`;

const NickName = styled.Text`
  color: white;
  font-size: ${perfectSize(18)}px;
  font-weight: 600;
`;
const RatingTextContent = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Rating = styled.Text`
  color: white;
  margin-top: ${perfectSize(5)}px;
  font-weight: 300;
`;
const SettingsIcon = styled.Image``;
const Profile = styled.Text`
  color: white;
  font-size: ${perfectSize(24)}px;
  font-weight: bold;
  margin-top: ${perfectSize(22)}px;
`;
const Chart = styled.View`
  margin-top: ${perfectSize(10)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const StatsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const StatsContent = styled.View`
  margin-left: ${perfectSize(31)}px;
`;
const Wins = styled.Text`
  color: white;
  font-weight: bold;
  margin-top: ${perfectSize(5)}px;
`;
const Loses = styled.Text`
  color: white;
  font-weight: bold;
  margin-top: ${perfectSize(5)}px;
`;
const Pats = styled.Text`
  color: white;
  font-weight: bold;
  margin-top: ${perfectSize(5)}px;
`;
const PercentTxt = styled.Text`
  color: white;
  margin-left: ${perfectSize(33)}px;
  margin-top: ${perfectSize(5)}px;
`;
const AllTime = styled.Text`
  color: white;
  margin-top: ${perfectSize(37)}px;
  font-weight: 500;
`;
const RewardsView = styled.View`
  width: ${perfectSize(283)}px;
  height: ${perfectSize(54)}px;
  border: 1px solid #363661;
  border-radius: ${perfectSize(8)}px;
  align-items: center;
  flex-direction: row;
  margin-top: ${perfectSize(11)}px;
`;
const RewardsIcon = styled.Image`
  margin-left: ${perfectSize(11)}px;
`;
const Rewards = styled.Text`
  color: white;
  margin-left: ${perfectSize(6)}px;
  font-size: ${perfectSize(18)}px;
`;
const RewardsNumber = styled.Text`
  color: white;
  margin-left: ${perfectSize(29)}px;
  font-size: ${perfectSize(24)}px;
  font-weight: bold;
`;
const BorderTabs = styled.View`
  flex-direction: row;
  margin-top: ${perfectSize(31)}px;
`;
const FriendsView = styled.View`
  width: ${perfectSize(135)}px;
  height: ${perfectSize(54)}px;
  border: 1px solid #363661;
  border-radius: ${perfectSize(8)}px;
  flex-direction: row;
  align-items: center;
  margin-right: ${perfectSize(13)}px;
`;
const FriendsIcon = styled.Image`
  margin-left: ${perfectSize(11)}px;
`;
const FriendsTextContent = styled.View`
  margin-left: ${perfectSize(9)}px;
`;
const Friends = styled.Text`
  color: white;
`;
const FriendsCounter = styled.Text`
  color: white;
  font-size: ${perfectSize(24)}px;
  font-weight: bold;
`;
const AddFriendView = styled.View`
  width: ${perfectSize(135)}px;
  height: ${perfectSize(54)}px;
  border: 1px solid #363661;
  border-radius: ${perfectSize(8)}px;
  flex-direction: row;
  align-items: center;
`;
const AddFriendIcon = styled.Image`
  margin-left: ${perfectSize(9)}px;
`;

const AddFriend = styled.Text`
  color: white;
  margin-left: ${perfectSize(9)}px;
`;
const BalanceView = styled.View`
  width: ${perfectSize(135)}px;
  height: ${perfectSize(153)}px;
  border: 1px solid #363661;
  border-radius: ${perfectSize(8)}px;
  align-items: center;
  margin-right: ${perfectSize(13)}px;
`;
const Balance = styled.Text`
  color: white;
  font-size: ${perfectSize(20)}px;
  margin-top: ${perfectSize(18)}px;
`;
const BalanceText = styled.View`
  flex-direction: row;
  align-items: flex-end;
  bottom: ${perfectSize(13)}px;
`;
const BalanceNum = styled.Text`
  margin-top: ${perfectSize(8)}px;
  font-size: ${perfectSize(20)}px;
  font-weight: bold;
  color: white;
`;
const PercentText = styled.Text`
  color: #5eff5a;
  margin-top: ${perfectSize(11)}px;
  font-size: ${perfectSize(10)}px;
  font-weight: 300;
`;
const AwardsView = styled.View`
  width: ${perfectSize(135)}px;
  height: ${perfectSize(153)}px;
  border: 1px solid #363661;
  border-radius: ${perfectSize(8)}px;
  align-items: center;
  justify-content: center;
`;
const AwardsBg = styled.Image`
  position: absolute;
`;
const Awards = styled.Text`
  color: white;
  font-size: ${perfectSize(20)}px;
  font-weight: bold;
`;
const GraphBg = styled.View`
  margin-top: ${perfectSize(15)}px;
`;
const Arrow = styled.Image``;

const WinsCircle = styled.View`
  height: ${perfectSize(10)}px;
  width: ${perfectSize(10)}px;
  background-color: #c2f;
  border-radius: ${perfectSize(5)}px;
  margin-top: ${perfectSize(5)}px;
  margin-right: ${perfectSize(10)}px;
`;

const ChartImg = styled.Image`
  position: absolute;
  align-self: center;
  top: ${perfectSize(10)}px;
`;
