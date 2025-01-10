const users = [
  {
    username: 'alice',
    password: '123',
    profile_image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
    posts: 6,
    followers: 405,
    following: 180,
    bio: 'Passionate about photography and travel. Exploring the world one shot at a time.',
    tech_profession: 'UX/UI Designer',
    interests: [
      'Web Design',
      'Mobile App Design',
      'Photography',
      'User Research'
    ]
  },
  {
    username: 'bob',
    password: '123',
    profile_image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
    posts: 12,
    followers: 350,
    following: 250,
    bio: 'Tech enthusiast and gamer. Always on the lookout for the latest trends.',
    tech_profession: 'Software Developer',
    interests: ['Video Games', 'Machine Learning', 'Open Source', 'Blockchain']
  },
  {
    username: 'charlie',
    password: '123',
    profile_image: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    posts: 9,
    followers: 590,
    following: 400,
    bio: 'Fitness junkie and foodie. Sharing my journey of healthy living and delicious meals.',
    tech_profession: 'Data Analyst',
    interests: [
      'Data Visualization',
      'AI & Machine Learning',
      'HealthTech',
      'Big Data'
    ]
  },
  {
    username: 'diana',
    password: '123',
    profile_image: 'https://images.unsplash.com/photo-1526142805342-8c7badb164e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxwcm9maWxlfGVufDB8fDB8fHww',
    posts: 3,
    followers: 950,
    following: 120,
    bio: 'Art lover, nature seeker, and bookworm. Here to share my creative side.',
    tech_profession: 'Graphic Designer',
    interests: ['Web Design', '3D Modeling', 'Animation', 'Augmented Reality']
  },
  {
    username: 'ethan',
    password: '123',
    profile_image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxwcm9maWxlfGVufDB8fDB8fHww',
    posts: 0,
    followers: 400,
    following: 300,
    bio: 'Entrepreneur at heart. Passionate about startups, technology, and coffee.',
    tech_profession: 'Full Stack Developer',
    interests: ['Startups', 'Cloud Computing', 'Cybersecurity', 'DevOps']
  }
]


export const setLocalStorage = () => {
  localStorage.setItem('users', JSON.stringify(users))
}

export const getLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem('users'))
  return (user)
}
