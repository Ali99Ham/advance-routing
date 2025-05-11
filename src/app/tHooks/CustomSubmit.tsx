import { useFormStatus } from "react-dom";

const CustomSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Pending.." : "Submit"}
    </button>
  );
};

export default CustomSubmit;
