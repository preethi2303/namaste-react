const heading = React.createElement('h1',{id:"heading1"},'hello world from react');
const root =  ReactDOM.createRoot(document.getElementById('root'));
const parent = React.createElement('div',{id:'parent'},React.createElement('div',{id:'child'},
[React.createElement('h1',{},'i am h1 tag'),React.createElement('h1',{},'i am h1 tag')]))

root.render(parent)