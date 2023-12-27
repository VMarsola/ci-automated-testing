interface GenericRequest<T> {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  data?: T;
  needAuth?: boolean;
  queries?: T;
}
