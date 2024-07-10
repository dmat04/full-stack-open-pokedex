Let's assume the application being built is a backend service written in the Go language (Golang).

### Linting

Some popular Go linters are: **vet** (part of compiler package), **staticcheck**, **gosec**,
**revive** and **golangci-lint** (which actually combines multiple linters).

### Testing

Besides the included **testing** package included in the Go standard library some popular
testing libraries are: stretch/**testify**, martyer/**is**, uber-go/**mock**.

### Build

For simple Go projects the standard '**go build**' tool is sufficient for compiling,
however **gnu make** might be useful if the build process has some extra requirements.
**Bazel** is a building/testing tool which is language agnostic and has built-in support
for Go. Similar to gnu make, **go-task** is a lightweight build tool written in Go, aiming
to be simpler and easir to run than gnu make.


### CI alternatives

Some cloud based alternatives to GitHub Actions are **Travis CI**, **CircleCI**, **AWS CodePipeline**,
**Azure Pipelines**. **JetBrains TeamCity** is available as both as a cloud service and 
self-hosted instance. Anther self-hosted alternative is **Bamboo**.

### Self-hosted vs cloud-based

Considering that the project size is not too big and doesn't have any special requirements,
a cloud-based CI service would probably be appropriate. Ofcourse, if the team is familiar
familiar with self-hosted setups (or has access to dedicated DevOps engineers) and their
organization already has the resources to host it, a self-hosted solution might become
a sensible choice.