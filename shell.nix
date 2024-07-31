{ pkgs ? (import <nixpkgs> {
    config.allowUnfree = true;
}) }:

pkgs.stdenv.mkDerivation {
  name = "chess-bot";

  buildInputs = with pkgs; [
    nodejs_20
    nodePackages.create-react-app
  ];
}