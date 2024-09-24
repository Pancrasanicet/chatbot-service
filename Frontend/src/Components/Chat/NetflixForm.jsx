import { useForm } from "react-hook-form";

function NetflixForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-4 bg-white shadow-lg rounded-lg max-w-md "
    >
      <input
        {...register("firstName", { required: true })}
        placeholder="Nom"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.firstName && (
        <span className="text-red-500 text-sm">Ce champ est requis</span>
      )}

      <input
        {...register("lastName", { required: true })}
        placeholder="Prénoms"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.lastName && (
        <span className="text-red-500 text-sm">Ce champ est requis</span>
      )}

      <input
        {...register("email", { required: true })}
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.email && (
        <span className="text-red-500 text-sm">Ce champ est requis</span>
      )}

      <input
        {...register("phone", { required: true })}
        placeholder="Numéro de téléphone"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.phone && (
        <span className="text-red-500 text-sm">Ce champ est requis</span>
      )}

      <label htmlFor="bithDate" className="w-full p-2 border border-gray-300">
        Date de naissance
      </label>

      <input
        type="date"
        {...register("birthDate", { required: true })}
        placeholder="Date de naissance"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.birthDate && (
        <span className="text-red-500 text-sm">Ce champ est requis</span>
      )}

      <input
        {...register("birthPlace", { required: true })}
        placeholder="Lieu de naissance"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.birthPlace && (
        <span className="text-red-500 text-sm">Ce champ est requis</span>
      )}

      <input
        {...register("nationality", { required: true })}
        placeholder="Nationalité"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.nationality && (
        <span className="text-red-500 text-sm">Ce champ est requis</span>
      )}

      <input
        {...register("currentCity", { required: true })}
        placeholder="Ville actuelle"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.currentCity && (
        <span className="text-red-500 text-sm">Ce champ est requis</span>
      )}

      <input
        {...register("profession", { required: true })}
        placeholder="Profession"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.profession && (
        <span className="text-red-500 text-sm">Ce champ est requis</span>
      )}

      <button type="submit">Envoyer</button>
    </form>
  );
}

export default NetflixForm;
