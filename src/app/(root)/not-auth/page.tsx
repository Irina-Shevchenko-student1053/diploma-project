import { InfoBlock } from "@/components/shared/info-block";
import { NextPage } from "next";
import { Suspense } from "react";

const NotAuthPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <Suspense
        fallback={<div>Завантаження...</div>}
      >
        <InfoBlock
          title="Доступ заборонено"
          text="Дану сторінку можуть переглядати тільки авторизовані користувачі"
          imageUrl="/assets/images/lock.png"
        />
      </Suspense>
    </div>
  )
}

export default NotAuthPage