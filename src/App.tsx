/* eslint-disable */
// Lint 끄는 기능임

import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  // let [a, b] = useState('남자 코트 추천'); // useState 예제
  let [글제목, b] = useState('남자 코트 추천');
  // useState는 변수와 다르게, 자동으로 재렌더링 됨!
  // 자동으로 html에 반영되게 만들고 싶을때 사용!


  let [blogTitle, blogTitleReset] = useState(['여자 코트 추천', '자바스크립트 강의 정리', '강남 삼겹살 맛집']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, settitle] = useState(0);
  let [입력값, 입력값변경] = useState('');


  // map() 사용법
  // [1,2,3].map(function(e){
  //   return '123123' // Array로 담아주고, 3번 출력됨.
  // });


  // return 소괄호 안에 코드를 작성해야함.
  // return () 안에는 병렬로 태그 2개 이상 기입 금지
  return (
    <div className="App">
      <div className="black-nav">
        {/* 스타일을 넣고싶을 때 오브젝트 자료형으로 넣어야함. */}
        <h4 style={{color : 'red'}}>블로그임</h4>
      </div>

      <button onClick={()=>{
        let copy = [...blogTitle];
        copy.sort();
        blogTitleReset(copy)
      }} >가나다순 정렬</button>

      <button onClick={()=>{
        let copy = [...blogTitle]; // ...은? 괄호를 벗겨주고 다시 생성해주세요 라는 뜻. 새로운 화살표개념
        copy[0] = '남자 코트 추천';
        blogTitleReset(copy);
      }}>버튼임</button>
      
      {/* <div className='list'>
        <h4>{blogTitle[0]} <span onClick={()=>{ 따봉변경(따봉+1) }}>❤️</span>  </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{blogTitle[1]}</h4>
        <p>2월 17일 발행</p>
      </div> */}


      {
        blogTitle.map(function(a, i){ // i는? 반복문 돌 때마다 0부터 1씩 증가하는 함수
          return (
            <div className='list' key={i}>
              
              <h4 onClick={()=>{ setModal(!modal); settitle(i) } } >
                {/* 글제목 */}
                { blogTitle[i] }
                <span onClick={(e)=>{
                  {/* e.stopPropagation() -> 이벤트버블링 방지 */}
                  e.stopPropagation();

                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                }}> ❤️ </span> {따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...blogTitle];
                copy.splice(i, 1);
                blogTitleReset(copy);
              }} >삭제</button>
            </div>
          )
        })
      }


      {/* input에 입력한 값 가져오는 방법 */}
      <input onChange={(e)=>{
        입력값변경(e.target.value);
      }} type="text" />
      <button onClick={()=>{
        let copy = [...blogTitle];
        copy.unshift(입력값);
        blogTitleReset(copy);
      }}>글 발행</button>


      {/* 컴포넌트 */}
      {
        // 삼항연산자
        // html안에 조건식 쓰고싶을 때
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        modal == true ? <Modal title={title} blogTitleReset={blogTitleReset} blogTitle={blogTitle}/> : null
        // 자식이부모에게, 옆집 전송 X
      }
      
    </div>
  );
}

// [ 컴포넌트 ]
// 어떤걸 컴포넌트로 만들면 좋은가?
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경 되는 것들
function Modal(props:any){
  return (
  // 의미없는 div 문법
  <>
    <div className='modal'>
      <h4>{props.blogTitle[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
    <div></div>
  </>
  )
}

export default App;
