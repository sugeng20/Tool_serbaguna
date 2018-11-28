$("document").ready(function() {

  $("#formK").submit(function() {
    const p = $("#panjang").val();
    const l = $("#lebar").val();
    const h = $("#hasilK");
    const hasil = (p * 2) + (l * 2) ; 
    h.val(hasil + " cm");
    event.preventDefault();
  });

  $("#formL").submit(function() {
    const p = $("#panjangL").val();
    const l = $("#lebarL").val();
    const h = $("#hasilL");
    const hasil = p * l;
    h.val(hasil + " Cm");
    event.preventDefault();
  });
});