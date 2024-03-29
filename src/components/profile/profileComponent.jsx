import Container from "../../shared/Container";
import UserBalance from "./user/userBalance";
import UserTabs from "./user/userTabs";

export default function ProfileComponent() {
  return (
    <Container>
      <div className="mt-11 h-[260px]  w-full rounded-t-2xl bg-[#F5F5F5]  border">
        <div className="mb-[20px] ">
          <UserBalance />
        </div>
        <UserTabs />
      </div>
    </Container>
  );
}
