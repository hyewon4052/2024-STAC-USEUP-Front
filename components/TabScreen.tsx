import { useState, useRef } from 'react';
import { Dimensions, View, ScrollView, StyleSheet } from 'react-native';
import Tab from './Tab';

interface Props {
    menus: string[];
    initTabIndex?: number;
    contents: React.ReactNode[];
}

const TabScreen = ({ menus, initTabIndex = 0, contents }: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(initTabIndex);
    const scrollViewRef = useRef<ScrollView | null>(null);
    const windowWidth = Dimensions.get('window').width;

    const onSelectTab = (index: number) => {
        setSelectedIndex(index);
        scrollViewRef.current?.scrollTo({
            x: windowWidth * index,
            animated: true,
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <Tab
                menus={['상품 정보', '문의 하기']}
                selectedIndex={selectedIndex}
                onSelectHandler={onSelectTab}
            />
            <ScrollView
                horizontal
                scrollEnabled={false}   //옆으로 슬라이드 금지
                ref={scrollViewRef}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
            >
                {contents.map((content, index) => (
                    <View
                        key={index}
                        style={{
                            width: windowWidth,
                        }}
                    >
                        {content}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default TabScreen;
