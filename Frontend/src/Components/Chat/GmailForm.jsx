import { useForm } from "react-hook-form";

function GmailForm({ onSubmit }) {
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
      <div>
        <input
          {...register("firstName", { required: true })}
          placeholder="Nom"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.firstName && (
          <span className="text-red-500 text-sm">Ce champ est requis</span>
        )}
      </div>

      <div>
        <input
          {...register("lastName", { required: true })}
          placeholder="Prénoms"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.lastName && (
          <span className="text-red-500 text-sm">Ce champ est requis</span>
        )}
      </div>

      <div>
        <input
          {...register("phone", { required: true })}
          placeholder="Numéro de téléphone"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">Ce champ est requis</span>
        )}
      </div>

      <div>
        <input
          type="date"
          {...register("birthDate", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.birthDate && (
          <span className="text-red-500 text-sm">Ce champ est requis</span>
        )}
      </div>

      <div>
        <input
          {...register("birthPlace", { required: true })}
          placeholder="Lieu de naissance"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.birthPlace && (
          <span className="text-red-500 text-sm">Ce champ est requis</span>
        )}
      </div>

      <div>
        <input
          {...register("nationality", { required: true })}
          placeholder="Nationalité"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.nationality && (
          <span className="text-red-500 text-sm">Ce champ est requis</span>
        )}
      </div>

      <div>
        <input
          {...register("currentCity", { required: true })}
          placeholder="Ville actuelle"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.currentCity && (
          <span className="text-red-500 text-sm">Ce champ est requis</span>
        )}
      </div>

      <div>
        <input
          {...register("profession", { required: true })}
          placeholder="Profession"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.profession && (
          <span className="text-red-500 text-sm">Ce champ est requis</span>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}

export default GmailForm;
