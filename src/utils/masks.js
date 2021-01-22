import VMasker from "vanilla-masker";

function masks(text, type) {
  switch (type) {
    case "cep":
      return VMasker.toPattern(text, "99999-999");
    case "cpf":
      return VMasker.toPattern(text, "999.999.999-99");
    default:
  }
}

export default masks;