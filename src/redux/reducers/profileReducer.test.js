import profileReducer, {addPostAction} from './profileReducer';

const action = addPostAction("new post text")
const state = {
  PostsData: [
    {id: '1', message: 'Hi it is my first post'},
    {id: '2', message: 'This is second post'}
  ]
}

test('length should be tested', () => {
  const newState = profileReducer(state, action)
  // console.log(newState.PostsData[2])
  expect(newState.PostsData.length).toBe(3);
});

test('message that added should be tested', () => {
  const newState = profileReducer(state, action)
  // console.log(newState.PostsData[2])
  expect(newState.PostsData[2].message).toBe("new post text");
});



