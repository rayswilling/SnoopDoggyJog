handleSignOut(e) {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('user signed out');
      });
  }