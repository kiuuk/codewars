function songDecoder(song) {
  return song.replace(/(WUB)+/g, " ").trim();
  // .replace(/(^ *)|( *$)/g, "")
  // .replace(/ +/g, " ");
}
