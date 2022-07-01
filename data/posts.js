import {USERS} from './users'

export const PPOSTS = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1652932191080-47718fdabe76?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332',
    user: USERS[0].user,
    likes: '8,208',
    caption: 'The Way 🏔 🎥 We are going to hike for a whole day here 🏃 👣 ',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'manOfSteel',
        comment: 'Great place to visit'
      },
      {
        user: 'RachelMcAd',
        comment: 'been there for many days and never got bored, one of the best natural places to visit.'
      },
    ],
  },

  {
    imageUrl: 'https://images.unsplash.com/photo-1652838299721-cb3298238045?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    user: USERS[4].user,
    likes: '7,423',
    caption: 'Zillion Star Hotel 🌠 🌌 This is going to be a great adventure...',
    profile_picture: USERS[4].image,
    comments: [
      {
        user: 'Menna',
        comment: 'beautiful!'
      },
      {
        user: 'ChinaTour',
        comment: 'great shot'
      },
      {
        user: 'Lio',
        comment: 'which camera lense did you use??!!'
      },
    ],
  },
]