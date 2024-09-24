import { useForm } from "react-hook-form";

function NetflixForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} placeholder="Nom" />
      {errors.firstName && <span>Ce champ est requis</span>}

      <input
        {...register("lastName", { required: true })}
        placeholder="Prénoms"
      />
      {errors.lastName && <span>Ce champ est requis</span>}

      <input {...register("email", { required: true })} placeholder="Email" />
      {errors.email && <span>Ce champ est requis</span>}

      <input
        {...register("phone", { required: true })}
        placeholder="Numéro de téléphone"
      />
      {errors.phone && <span>Ce champ est requis</span>}

      <input
        type="date"
        {...register("birthDate", { required: true })}
        placeholder="Date de naissance"
      />
      {errors.birthDate && <span>Ce champ est requis</span>}

      <input
        {...register("birthPlace", { required: true })}
        placeholder="Lieu de naissance"
      />
      {errors.birthPlace && <span>Ce champ est requis</span>}

      <input
        {...register("nationality", { required: true })}
        placeholder="Nationalité"
      />
      {errors.nationality && <span>Ce champ est requis</span>}

      <input
        {...register("currentCity", { required: true })}
        placeholder="Ville actuelle"
      />
      {errors.currentCity && <span>Ce champ est requis</span>}

      <input
        {...register("profession", { required: true })}
        placeholder="Profession"
      />
      {errors.profession && <span>Ce champ est requis</span>}

      <button type="submit">Envoyer</button>
    </form>
  );
}

export default NetflixForm;
