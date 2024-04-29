import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface updateParams {
  firstname: string;
  lastname: string;
}

const updateUser = async (
  username: string,
  { firstname, lastname }: updateParams
) => {
  const res = await prisma.user.update({
    where: {
      username,
    },
    data: {
      firstname,
      lastname,
    },
  });
  console.log(res);
};

updateUser("admin@mail.com", { firstname: "jack", lastname: "dee" });
