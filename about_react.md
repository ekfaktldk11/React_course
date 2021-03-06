# React is a JavaScript library for building user interfaces

웹 사이트는 클라이언트의 서버로의 요청마다 그 요청에 대한 서버의 응답을 받고 웹 사이트에 변화를 줌.

즉, 유저가 웹 사이트에서 링크나 버튼 같은 것을 클릭해서 이벤트를 발생시키면 그 이벤트에 대한 요청을 서버로 보내고, 서버로 부터 적절한 응답을 받고 그에 대한 처리가 웹 사이트에 수행됨.

클라이언트 <> 서버간의 요청 처리에 대한 레이턴씨가 생기고 이에 대한 기다림이 필요.

자바스크립트는 웹의 구조적인 형태를 나타내는 마크업언어인 HTML을 DOM 을 통해 조작을 가능케함.

또 JS는 유저의 요청으로 인한 서버에서의 응답인 새로운 HTML page를 서버로부터 받을 필요없이 해당 페이지를 변경가능함.

클라이언트 사이드 JS의 라이브러리인 리액트는 이 클라이언트 사이드 JS 코드를 작성하는데 도움을 주고, 현대의 반응형(modern reactive) 유저 인터페이스인 웹사이트를 빌딩함.

# JS 만 사용해서 웹을 구현한다면 ...

웹 사이트에서 발생하는 이벤트로 인해 처리해줘야 하는 low level의 모든 절차나 과정들을 하나하나 코딩을 해줘야함.

리액트를 사용하면 컴포넌트 단위의 구현을 통해 다소 파일구조는 복잡해지지만 가독성 좋은 코드와 코드의 유지보수가 편해짐

low level의 모든 절차를 작성해 줄 필요없이 리액트 라이브러리를 사용해서 직관적이고 짧은 코드를 구성가능(low level coding -> high level coding)

const para = document.createElement('p');
para.textContent = 'This is also visible';
document.getElementById('root').append(para);
: 위는 React 없이 regular JS 로,
  imperative(절차적, 명령적) 접근으로 <p>를 사용하는 방법임 (showing step by step clearly)
  하지만 React는 이런 과정이 필요없이 걍 사용하면 됨 -> <p></p>

# Widget approcah & SPA(Single Page Application) approach

- Widget approach : 위젯별 (컴포넌트별) 접근
- SPA approach : 전체 페이지 접근

React는 위 두가지 다 가능 하지만 보통 SPA 방식으로 사용되어서 전체페이지와 페이지안에서 위젯별로 확장될 수 있는 기능 까지 포함한 것들을 서버에서 클라이언트로 한번에 보냄.
-> 넷플릭스의 웹페이지 처럼, 넷플릭스 아이템에 커서를 올리면 로딩없이 바로 해당 아이템의 영상이 바로 재생됨(전체 영상이 아닌 클립)

# React.js Alternatives (third-party package would be need)

리액트 처럼 유명한 다른 웹 프레임워크들
Angular, Vue.js ...

# React is all about components and about building these components which we combined together (strongly in html & JS but CSS)

- 재사용이 가능하고 반응적인 컴포넌트 생성

# NodeJS
- nodeJS 는 JS 런타임 라이브러리임
- 개발한 웹의 preview server 기능
- scense trasfomation & optimization steps의 역할도함

# package.json
- 패키지이름 & 버전이 자꾸 바뀌니까 위 파일 체크하면서 이름이랑 버전 관리

# index.js
- React 프로젝트 run 시 최초 실행되는 file

# public folder
- 퍼블릭 폴더내의 대부분의 파일은 잘 사용하지 않지만 index.html은 중요
- index.html은 단인 html파일로, React 프로젝트 run시 가장 마지막으로 브라우저에게 로드되는 파일임.
- React는 SPA(Single Page Application)임. index.html을 보면 <div id="root"></div> 라는게 있는데 index.js를 보면
 ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') <--
);
위에있는 'root'를 통해 index.html에 전달되고(?) <App />은 ReactDOM을 통해 렌더링됨

# JSX ?: JSX stands for JS-XML
HTML은 결국 XML임(?)
- JSX 는 JS로 해석되어 브라우저에 보여짐
- 자세한(JSX to JS code) 확인을 하려면 브라우저에서 개발자 툴- static.js - main.chunk.js 확인

# How React works?
실제 code에 있는 JSX elements 들은 결국 HTML & JS code(built in elements)로 변환되어서 화면에 보여짐.
-> 프로젝트를 실행한 웹페이지의 소스를 보면 JSX tag는 온데간데 없고 HTML tag만 보여짐

# So which one is interperting the JSX to HTML(or JS) ?
'package.json'을 확인해 보면,
{
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
}
react-dom 은 react 프로젝트를 브라우저가 인식가능한 dom의 형태로 만들어주는 역할을 함

전에는 JSX 코드를 사용하는 모든 JS파일에
[import React from 'react';] 를 선언했었는데 요즘은 선언안함.

왜냐하면 이제는, 프로젝트 셋업에서 'import'를 추가하지 않고도 변환을 수행할 수 있으므로 'react Import'를 생략가능

return (
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses}/>
    </div>
  )
  /*
    위 return code의 JSX code를 길게 풀어내면... -> JSX's Alternatives
    React.createElement()의 parameter는 -> //(html-element, element's attributes, ...elements you'll create)
    return React.createElement(
      'div',
      {},
      React.createElement('h2', {}, "Let's get started"),
      React.createElement(Expenses, {items: expenses})
    );
    
    -> 이게 JSX code 밑에서 동작하여 자동으로 JSX to built in code로 번역을 시켜줌

    -> 위 처럼 번역되고, return 갑을 두개 이상할수 없기에 두개 이상의 JSX tag는 하나의 JSX tag로 감싸줘야함(A wrapper)
  */

# props ?
: custom HTML attributes

# React we follow that declarative approach
: define desired target states and React then takes care about reaching that state.

# Use a Component repeatedly.
: useState를 통해 state를 변경하는 하나의 컴포넌트를 여러번 사용한 스크린이 있다고 가정하자.

만약 여러개의 컴포넌트 중 하나의 컴포넌트의 state value를 배경하면, 전체 컴포넌트가 업데이트 되는 것이 아니라 state값이 변경된 컴포넌트만 업데이트 됨(업데이트? -> new state value 로 인한 컴포넌트 리렌더링).

# child to parent, parent to child
: 'props' only can be given 'child to parent' or 'parent to child'