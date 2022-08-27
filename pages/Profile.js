import React from "react";

function Profile() {
  return (
    <div className="profile ">
      <div className="profile__left">
        <div className="profile__heading">Profile</div>
        <div className="profile__text">
          To get more responses, fill out your resume in as much detail as
          possible.
        </div>

        <div className="profile__btn"> Fill my resume</div>
      </div>
      <div className="profile__right">
        <div className="profile__pic">
          <div className="profile__svg" />
          <div className="profile__svg" />
          <div className="profile__svg" />
          <div className="profile__svg" />
          <div className="profile__svg" />
          <div className="profile__svg" />
        </div>
        {/* <div className="profile__pic">
          <div className="profile__svg" />
          <div className="profile__svg" />
          <div className="profile__svg" />
          <div className="profile__svg" />
          <div className="profile__svg" />
          <div className="profile__svg" />
        </div> */}
      </div>
    </div>
  );
}

export default Profile;
