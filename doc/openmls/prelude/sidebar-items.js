window.SIDEBAR_ITEMS = {"enum":[["AeadType","AEAD types"],["Ciphersuite","MLS ciphersuites."],["CryptoError","Crypto errors."],["Error","Trait errors."],["HashType","Hash types"],["HpkeAeadType","AEAD Types for HPKE."],["HpkeKdfType","KDF Types for HPKE"],["HpkeKemType","KEM Types for HPKE"],["Node","Container enum for leaf and parent nodes."],["ProcessedMessageContent","Content of a processed message."],["Sender","All possible sender types according to the MLS protocol spec."],["SignatureScheme","SignatureScheme according to IANA TLS parameters"]],"struct":[["ApplicationMessage","Application message received through a [ProcessedMessage]."],["HpkeCiphertext","7.7. Update Paths"],["HpkeConfig","Convenience tuple struct for an HPKE configuration."],["HpkeKeyPair","Helper holding a (private, public) key pair as byte vectors."],["LeafNode","This struct implements the MLS leaf node and contains a [`KeyPackage`] and potentially a corresponding `HpkePrivateKey`."],["Member","A member in the group is identified by this [`Member`] struct."],["MlsMessageIn","Unified message type for incoming MLS messages."],["MlsMessageOut","Unified message type for outgoing MLS messages."],["ParentNode","This struct implements the MLS parent node. It contains its public key, parent hash and unmerged leaves. Additionally, it may contain the private key corresponding to the public key."],["ProcessedMessage","A message that has passed all syntax and semantics checks."],["SenderRatchetConfiguration","Stores the configuration parameters for `DecryptionRatchet`s."],["SerializedMlsGroup","Helper struct that contains the serializable values of an `MlsGroup."]],"trait":[["OpenMlsCrypto",""],["OpenMlsCryptoProvider","The OpenMLS Crypto Provider Trait"],["OpenMlsKeyStore","The Key Store trait"],["OpenMlsRand",""],["TlsDeserializeTrait","The `Deserialize` trait defines functions to deserialize a byte slice to a struct or enum."],["TlsSerializeTrait","The `Serialize` trait provides functions to serialize a struct or enum."],["TlsSizeTrait","The `Size` trait needs to be implemented by any struct that should be efficiently serialized. This allows to collect the length of a serialized structure before allocating memory."]],"type":[["ExporterSecret",""],["KemOutput",""]]};