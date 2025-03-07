const SavedCandidates = () => 
  {
    const tableCandidate = JSON.parse(localStorage.getItem('savedUsers')as string) || [];
    const tableUsers = tableCandidate.map((user: any) => (
      <tr key={user.id}>
        <td><img src={user.avatar_url} alt="Avatar" className="profile-picture" /></td>
        <td>{user.login}</td>
        <td><a href={user.organizations_url} target="_blank">{user.oranizations_url}</a></td>
        <td><a href={user.html_url} target="_blank">{user.html_url}</a></td>
      </tr>
    ));

  return (
    <>
      <h1>Potential Candidates</h1>
      <table>
  <tr>
    <th>Image</th>
    <th>Username</th>
    <th>Organizations URL</th>
    <th>Profile URL</th>
  </tr>
  {tableUsers}
</table>
    </>
  );
};

export default SavedCandidates;
