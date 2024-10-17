import { getUserMeLoader } from "@/data/services/getUserMeLoader";
import { ProfileForm } from "@/components/forms/ProfileForm";
import { ProfileImageForm } from "@/components/forms/ProfileImageForm";

export default async function AccountRoute() {
  const user = await getUserMeLoader();
  const userData = user.data;
  const userImage = userData?.image;

  return (
    <>
      <div className="p-4 pb-0">Account Page</div>
      <div className="grid grid-cols-1 gap-4 p-4 pt-0 lg:grid-cols-5">
        <ProfileForm data={userData} className="col-span-3" />
        <ProfileImageForm data={userImage} className="col-span-2" />
      </div>
    </>
  );
}
