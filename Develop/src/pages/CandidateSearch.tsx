import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import './CandidateSearch.css'; // Import the CSS file for styling

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [displayedUser, setDisplayedUser] = useState<Candidate | null>(null);

  useEffect(() => {
    searchGithub().then((data) => {
      setCandidates(data);
      if (data.length > 0) {
        setDisplayedUser(data[0]);
      }
    });
  }, []); // Empty dependency array ensures this runs only once

  const saveUser = () => {
    const savedUsers = JSON.parse(localStorage.getItem('savedUsers')as string) || [];
    savedUsers.push(displayedUser);
    localStorage.setItem('savedUsers', JSON.stringify(savedUsers));
    console.log('Saving user:', displayedUser);
  }

  const newCandidate = () => {
    window.location.reload();
  }
  return (
    <>
      <h1>Candidate Search</h1>
      {displayedUser && (
        <div className="candidate-profile">
          <img src={displayedUser.avatar_url} alt="Avatar" className="profile-picture" />
          <div className="candidate-details">
            <div><strong>Username:</strong> {displayedUser.login}</div>
            <div><strong>Email:</strong> {displayedUser.email}</div>
            <div><strong>Organizations URL:</strong> {displayedUser.organizations_url}</div>
            <div><strong>Profile URL:</strong> <a href={displayedUser.html_url} target="_blank" rel="noopener noreferrer">{displayedUser.html_url}</a></div>
          </div>
        </div>
      )}
      <button onClick={saveUser}>Save</button>
      <button onClick={newCandidate}>New Candidate</button>{
}
    </>
  );
};

export default CandidateSearch;
