# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Install
`yarn add styled-components react-icons`  
`yarn add classnames`
### styled-components
자바스크립트 내에서 CSS를 처리 할 수 있게 하는 라이브러리
### react-icons
FontAwesome과 같이 아이콘을 빠르게 사용할 수 있게 하는 라이브러리
### classnames
리액트에서는 class가 예약어로 사용되고 있기 때문에 이를 해결하고 classname을 편하게 관리하기 위한 라이브러리

# Prettierrc
여러 사람들과 협업할 때, 코드 스타일을 통일시켜준다.
루트폴더에 .Prettierrc 파일 생성 및 아래와 같이 입력
```
{
    "arrowParens": "always",
    "semi": true,
    "singleQuote": true,
    "useTabs": false,
    "trailingComma": "all",
    "tabWidth": 2,
    "printWidth": 80
}
```

# jsconfig.json
import 시, 절대 경로로 설정해주기 위해 사용한다.
루트폴더에 jsconfig.json 파일 생성 및 아래와 같이 입력
```
{
    "compilerOptions": {
        "target": "es6",
        "baseUrl": "src"
    },
    "include": ["src"]
}
```

# component
1, src폴더 내에 comoponents 폴더 생성  
2, components폴더 내에 TodoTemplate.js, Today.js,TodoInsert.js, TodoList.js, TodoListItem.js 컴포넌트 파일 생성  
(※ component생성 시, 첫문자는 대문자로)

# styled-components
1, 상단에 import styled from 'styled-components';로 선언  
2, 하단에 const ~로 익명함수 형식으로 생성  
``` javascript
EX))
const TodoWrapper = styled.div`
    width: 600px;
    margin: 6rem auto 0;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 5px 5px 25px rgba(0,0,0,0.2);
`; 
```

# react-icons
1, 상단에 import { 사용할 아이콘명 } from 'react-icons/md'; 선언  
2, 사용
``` javascript
EX))
<button type="submit"><MdAdd /></button>
```

# map함수를 이용한 component 반환
※ 반드시, key값을 전달해줘야함
``` javascript
{todos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id} />
            ))}
```

# input에 입력된 할 일 추가
> 고유값을 가질 id생성
``` javascript
 const nextId = useRef(4);
```
> onInsert함수
``` javascript
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id : nextId.current,
        text,
        checked : false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }
  );
```
> onSubmit 이벤트 설정
 ``` javascript
     const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value]
    );
  ```
  
  # 추가된 할 일 제거 기능
  ``` javascript
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );
  ```
  ``` javascript
  {todos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
            ))}
  ```
  ``` javascript
  <Remove onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </Remove>
  ```
  
  # 완료된 항목 체크 표시
  > 삼항연산자를 이용한 check표시
``` javascript
 <CheckBox className={cn('checkbox', {checked})}>
                {checked? <BsCheckCircleFill /> : <BsCircle />}
                <div className='text'>{text}</div>
            </CheckBox>
```
 > onToggle버튼 이용한 check
``` javascript
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) => 
          todo.id === id ? {...todo, checked : !todo.checked} : todo,
        ),
      );
    },
    [todos]
  );
```
``` javascript
{todos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}

```
``` javascript
<CheckBox 
            className={cn('checkbox', {checked})}
            onClick={() => onToggle(id)}
            >
                {checked? <BsCheckCircleFill /> : <BsCircle />}
                <div className='text'>{text}</div>
            </CheckBox>
```

# git에 업로드
1, 작업 완료  
2, 터미널에 `yarn add gh-pages` 입력  
3, github에서 새로운 repository 생성  
4, package.json파일에서 `"homepage" : "홈페이지 주소(ex))https://아이디.github.io/이름"`추가  
(시간이 오래걸리기 때문에 미리 추가해줌)  
5, package.json파일의 scripts에 `"predeploy": "npm run build", "deploy": "gh-pages -d build"`추가  
6, git status  
7, git add .
8. git commit -m "first commit"  
9. git branch -M main  
10. git remote add origin 주소  
11. git push -u origin main  
12. yarn deploy
