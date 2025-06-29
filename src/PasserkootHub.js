import React, { useState } from 'react';
import { FaPlus, FaUser, FaSearch } from 'react-icons/fa';
import './index.css';

const storiesData = [
  { id: 1, name: 'Amina', timeLeft: 3, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Sami', timeLeft: 2, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Kashif', timeLeft: 1, image: 'https://via.placeholder.com/150' },
];

function PasserkootHub() {
  const [stories, setStories] = useState(storiesData);
  const [newStoryImage, setNewStoryImage] = useState('');
  const [newStoryName, setNewStoryName] = useState('');

  const handleAddStory = () => {
    if (newStoryName && newStoryImage) {
      const newStory = {
        id: stories.length + 1,
        name: newStoryName,
        image: newStoryImage,
        timeLeft: 3,
      };
      setStories([newStory, ...stories]);
      setNewStoryImage('');
      setNewStoryName('');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>📸 Passerkoot Hub</h1>
        <div style={styles.search}>
          <FaSearch /> <input type="text" placeholder="Search..." style={styles.searchInput} />
        </div>
      </div>

      <div style={styles.storyInputContainer}>
        <input
          type="text"
          placeholder="Your name"
          value={newStoryName}
          onChange={(e) => setNewStoryName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newStoryImage}
          onChange={(e) => setNewStoryImage(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddStory} style={styles.button}>
          <FaPlus /> Add Story
        </button>
      </div>

      <div style={styles.storyContainer}>
        {stories.map((story) => (
          <div key={story.id} style={styles.storyCard}>
            <img src={story.image} alt="story" style={styles.storyImage} />
            <p style={styles.storyName}>{story.name}</p>
            <small style={styles.storyTime}>{story.timeLeft} days left</small>
          </div>
        ))}
      </div>

      <div style={styles.footer}>
        <FaUser /> Profile | Stories last 3 days
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'sans-serif',
    padding: '20px',
    background: '#fff',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  title: {
    fontSize: '24px',
    margin: 0,
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: '4px 8px',
    borderRadius: '8px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    marginLeft: '5px',
  },
  storyInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: '#6c63ff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
  },
  storyContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '15px',
  },
  storyCard: {
    backgroundColor: '#f7f7f7',
    padding: '10px',
    borderRadius: '12px',
    textAlign: 'center',
  },
  storyImage: {
    width: '100%',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  storyName: {
    fontWeight: 'bold',
    margin: '8px 0 4px 0',
  },
  storyTime: {
    color: '#777',
  },
  footer: {
    marginTop: '30px',
    paddingTop: '10px',
    borderTop: '1px solid #ddd',
    textAlign: 'center',
    color: '#888',
  },
};

export default PasserkootHub;
