import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import LoadingButton from "@/components/LoadingButton";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import { Helmet } from 'react-helmet-async';

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    // return <span>Loading...</span>;
    return <LoadingButton/>
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return (
    <>
    <Helmet>
        <title>Profile</title>
        <meta
          name="description"
          content="Welcome to RestauMaster Food Ordering Website. Let's know about RestauMaster Click for more..."
        />
        <link rel="canonical" href='https://restaumaster.vercel.app/user-profile' />
      </Helmet>
      <UserProfileForm
        currentUser={currentUser}
        onSave={updateUser}
        isLoading={isUpdateLoading}
      />
    </>
  );
};

export default UserProfilePage;
