import React, { useState, useEffect, useRef } from 'react'

//Styles

import { FadeInSection } from '../../App.styles'
import { LessonInfoArea, BigTopText, SmallTopText, FlexContainer, LeftSide, RightSide, TextBox, Title, Text , Map} from './LessonInfo.styles'

const LessonInfo = () => {

    const [atScreen, setAtScreen] = useState(false)
    const fadeInElement = useRef() as React.MutableRefObject<HTMLInputElement>

    useEffect(() => {

        const { current } = fadeInElement

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setAtScreen(entry.isIntersecting))
        }, options)

        if (!atScreen) {
            observer.observe(current)
        }

        return () => {
            observer.unobserve(current)
        }
        
    }, [atScreen])

    return(
        <LessonInfoArea>
            <FadeInSection ref={fadeInElement} atScreen={atScreen}>
                <BigTopText>幸せ、笑顔あふれる楽しい教室</BigTopText>
                <SmallTopText emphasis={false} >三味線の粋な世界に触れてみませんか? 『笑三味線教』では、初心者から専門的に習いたい方まで対応しております。 古典的な奏法の基礎をベースに幅広い邦楽曲の演奏ができるようにレッスンします。</SmallTopText>
                <SmallTopText emphasis={true}>現在は新型コロナウイルス感染症等感染防止対策実施し、お稽古を行っております。</SmallTopText>

                <FlexContainer>
                    <LeftSide>
                        <TextBox>
                            <Title>お稽古日 / 時間</Title>
                            <Text>火曜日10時〜 水曜日16時〜　木曜日16時〜　土・日曜日10時〜</Text>
                            <Text>その他の日時は応相談</Text>
                        </TextBox>
                        <TextBox>
                            <Title>お月謝</Title>
                            <Text>小学生（30分）月1回 3,000円　/　月2回 5,000円</Text>
                            <Text>中高生（45分）月1回 3,000円　/　月2回 6,000円</Text>
                            <Text>大人（60分）月1回 4,000円　/　月2回 8,000円</Text>
                        </TextBox>
                        <TextBox>
                            <Title>お支払い方法</Title>
                            <Text>受講日に現金でお支払い下さい。</Text>
                            <Text>(クレジットカードの使用はできません。)</Text>
                        </TextBox>
                        <TextBox>
                            <Title>レッスンのお申し込み</Title>
                            <Text>レッスン日は上記の間で、ご都合の良い時間をご指定ください。</Text>
                            <Text>予約方法は、電話またはお問い合わせフォームから。</Text>
                        </TextBox>
                        <TextBox>
                            <Title>振替えポリシー</Title>
                            <Text>講師の演奏会出演等により、レッスン日の振替えをお願いすることがあります。また、生徒様のご都合による振替も前日までにご連絡を頂くことで、対応したいと考えております。台風や震災時で教室実施が難しいときは、振替え日を設定します。</Text>
                            <Text>また、台風や震災等で教室実施が難しいときは、振替え日を設定します。</Text>
                        </TextBox>
                    </LeftSide>
                    <RightSide>
                        <TextBox>
                            <Title>レッスン内容</Title>
                            <Text>日本の伝統楽器である三味線や箏の音色に触れ、古典的な奏法を中心に幅広く邦楽曲に親しんでもらう。</Text>
                            <Text>古き良き三味線の音色に触れてもらう。</Text>
                        </TextBox>
                        <TextBox>
                            <Title>場所&MAP</Title>
                            <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.2822651874576!2d135.5052735152315!3d34.67282488044165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e73e14bcefb7%3A0xca6e637cd50f5d4b!2z44CSNTQyLTAwODIgT3Nha2EsIENodW8gV2FyZCwgU2hpbWFub3VjaGksIDEtY2jFjW1l4oiSMTTiiJIxNSDlpKnph47jg5Pjg6s!5e0!3m2!1sen!2sjp!4v1639808685010!5m2!1sen!2sjp"></Map>
                            <Title>島之内教室</Title>
                            <Text>大阪市中央区島の内1-14-15 天野ビル</Text>
                        </TextBox>

                    </RightSide>
                </FlexContainer>
            </FadeInSection>
        </LessonInfoArea>
    )
}

export default LessonInfo