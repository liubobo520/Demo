import React from 'react'

import { Tree } from 'antd'
 
export default function JumpLink1(props) {

  // const handleClick = (e) => {
  //   // console.log(e.target.parentNode.firstChild.innerText)
  //   let changeName = prompt('请输入修改的名称')
  //   console.log(changeName);
  //   e.target.parentNode.firstChild.innerText = changeName
  // }

  const redo = function(listName) {
    return (
      <div>
        <span>{listName}</span>
        <button onClick={(e)=>handleClick(e)}>修改</button>
      </div>
    )
  }

  const treeData = [
    {
      title: redo('0-0'),
      key: '0-0',
      titleRender: <div>32132321</div>,
      children: [
        {
          title: redo('0-0-0'),
          key: '0-0-0',
          disabled: true,
          children: [
            { title: redo('0-0-0-0'), key: '0-0-0-0',disableCheckbox: true, },
            { title: redo('0-0-0-1'), key: '0-0-0-1' },
            { title: redo('0-0-0-2'), key: '0-0-0-2' },
          ],
        },
        {
          title: redo('0-0-1'),
          key: '0-0-1',
          children: [
            { title: redo('0-0-1-0'), key: '0-0-1-0' },
            { title: redo('0-0-1-1'), key: '0-0-1-1' },
            { title: redo('0-0-1-2'), key: '0-0-1-2' },
          ],
        },
        {
          title: redo('0-0-2'),
          key: '0-0-2',
        },
      ],
    },
    {
      title: redo('0-1'),
      key: '0-1',
      children: [
        { title: redo('0-1-0-0'), key: '0-1-0-0' },
        { title: redo('0-1-0-1'), key: '0-1-0-1' },
        { title: redo('0-1-0-2'), key: '0-1-0-2' },
      ],
    },
    {
      title: redo('0-2'),
      key: '0-2',
    },
  ];
  
  return (
    <div>
      <h1>JumpLink1</h1>
      <Tree
      selectable
        checkable 
        defaultExpandAll
        treeData={treeData}
      />
    </div>
  );
  
} 



