import React from 'react'
import {AiOutlineAlignCenter, AiOutlineAlignLeft, AiOutlineAlignRight} from 'react-icons/ai'

export default {
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [
    {type: 'table'},
    {
      title: 'Content',
      type: 'block',
      styles: [
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Large Paragraph', value: 'largeParagraph'},
        {title: 'Small Paragraph', value: 'smallParagraph'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {
            title: 'Align Left',
            value: 'alignLeft',
            icon: AiOutlineAlignLeft,
            component: (props) => <span style={{textAlign: 'left'}}>{props.children}</span>,
          },
          {
            title: 'Align Center',
            value: 'alignCenter',
            icon: AiOutlineAlignCenter,
            component: (props) => <span style={{textAlign: 'center'}}>{props.children}</span>,
          },
          {
            title: 'Align Right',
            value: 'alignRight',
            icon: AiOutlineAlignRight,
            component: (props) => <span style={{textAlign: 'right'}}>{props.children}</span>,
          },
          {
            title: 'Red Text',
            value: 'redText',
            blockEditor: {
              icon: () => '🟥',
              label: 'Red Text',
              render: (props) => <span style={{color: 'red'}}>{props.children}</span>,
            },
          },
          {
            title: 'Black Text',
            value: 'blackText',
            blockEditor: {
              icon: () => '⬛',
              label: 'Black Text',
              render: (props) => <span style={{color: 'black'}}>{props.children}</span>,
            },
          },
        ],
        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'Link',
                description:
                  'Supports external links with http:// or https:// and internal links with /',
                name: 'link',
                type: 'link',
              },
            ],
          },
        ],
      },
    },
  ],
}
