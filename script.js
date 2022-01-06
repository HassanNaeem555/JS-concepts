function calculateTax(price, tax, description) {
  tax = tax ?? 0.05;
  description = description ?? "Default Item";
  const total = price * (1 + tax);
  console.log(
    `%c${description} With Tax:%c $${total}`,
    "font-weight:900;",
    "font-weight:900;color:green;"
  );
}
calculateTax(100, 2, "My item");
calculateTax(100, 0, "My other item");
calculateTax(100, 2, undefined);
calculateTax(100, undefined, "My Other items");
calculateTax(100, undefined, undefined);
