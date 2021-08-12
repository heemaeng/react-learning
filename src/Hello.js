import React from 'react';
// 세미콜론 생략 하셔도 되고 안하셔도 됨
function Hello({ color, name, isSpecial }) {
    return (
        <div style={{
            color
        }}>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name:'이름없음'
};
export default Hello;