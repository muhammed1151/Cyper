const Error = ({ msg }: { msg: string }) => {
  return msg ? <span className="text-red-700">{msg}</span> : null;
};

export default Error;
