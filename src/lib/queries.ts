import { User } from "@/types/auth";
import { queryOptions } from "@tanstack/react-query";

const globalKeys = ["user"];

export const queries = {
  getUser: queryOptions({
    queryKey: [...globalKeys],
    queryFn: () =>
      new Promise<User>((res) => {
        setTimeout(() => {
          res({ name: "John Appleseed" });
        }, 1000);
      }),
  }),
};
