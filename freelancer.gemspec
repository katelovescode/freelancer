# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "freelancer"
  spec.version       = "0.1.0"
  spec.authors       = ["Kate Donaldson"]
  spec.email         = ["kate@katelovescode.com"]

  spec.summary       = "Freelancer Jekyll Theme"
  spec.homepage      = "https://github.com/katelovescode/freelancer"
  spec.license       = "MIT"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 2.0.2"
  spec.add_development_dependency "rake", "~> 12.0"
end
