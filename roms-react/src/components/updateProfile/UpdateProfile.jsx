import "./UpdateProfile.scss";
const UpdateProfile = () => {

  return (
    <div className="update-profile">
      <h2>Edita tu perfil</h2>
      <form >
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type={'email'} />
        </div>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input id='name' type={'text'} />
        </div>
        <div>
          <label htmlFor="web">Website:</label>
          <input id='web'type={'text'} />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
