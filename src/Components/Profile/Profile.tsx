import React from 'react'

import profile from './profile.jpg'

//Styles
import { ProfileArea, FlexContainer, ProfilePicture, TextArea, TextBox, Text, BiggerText, InfoTextBox, ListItem, SubText, HorizontalRule } from './Profile.styles'
import { Title, SubTitle } from '../../App.styles'

const Profile = () => {
    return(
        <ProfileArea>
            <Title color="#2F2F2F">プロフィール</Title>
            <SubTitle color="#2F2F2F">Profile</SubTitle>
            <FlexContainer>
                <ProfilePicture src={profile}></ProfilePicture>
                <TextArea>
                    <InfoTextBox>
                        <BiggerText topMargin={false}>岡崎紗璃</BiggerText>
                        <SubText>(おかざきさり)</SubText>
                        <BiggerText topMargin={true}>清元延菊笑璃</BiggerText>
                        <SubText>(きよもとのぶきくえみり)</SubText>
                        <HorizontalRule></HorizontalRule>
                        <ul>
                            <ListItem>1990年　12月26日大阪生まれ</ListItem>
                            <ListItem>2019年度　大阪音楽大学音楽学部音楽学科声楽専攻　卒業</ListItem>
                            <ListItem>笑(Emi)三味線教室主宰</ListItem>
                        </ul>
                    </InfoTextBox>
                    <TextBox>
                    <Text>14歳より清元 延菊笑師、清元菊輔師の両氏に師事し、20歳で清元の師範免許を取得する。清元 延菊笑璃として、舞踊会の地方、祇園踊り、北野踊りの三味線方として活動する。NHKラジオ放送「邦楽のひととき」等にも出演し、活動の幅を広げる。</Text>
                        <Text>日本古来の伝統楽器である三味線の音色を、古典の楽曲に限らず、JazzやPops等の現代楽曲にも取り入れた演奏活動と共に、後進の指導にも力を入れている。</Text>
                        <Text>清元や長唄等の江戸の音曲と、地歌等の上方の音曲を両方を学んだことにより、幅広い邦楽の世界を醸し出す演奏家として活躍中。</Text>
                    </TextBox>
                </TextArea>
            </FlexContainer>
        </ProfileArea>
    )
}

export default Profile