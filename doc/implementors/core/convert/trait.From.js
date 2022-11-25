(function() {var implementors = {
"openmls":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.65.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"openmls/error/struct.ErrorString.html\" title=\"struct openmls::error::ErrorString\">ErrorString</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.65.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"openmls/error/struct.ErrorString.html\" title=\"struct openmls::error::ErrorString\">ErrorString</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.65.0/std/primitive.str.html\">str</a>, &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.65.0/std/primitive.u8.html\">u8</a>])&gt; for <a class=\"struct\" href=\"openmls/ciphersuite/signature/struct.SignContent.html\" title=\"struct openmls::ciphersuite::signature::SignContent\">SignContent</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/ciphersuite/signature/struct.OpenMlsSignaturePublicKey.html\" title=\"struct openmls::ciphersuite::signature::OpenMlsSignaturePublicKey\">OpenMlsSignaturePublicKey</a>&gt; for <a class=\"struct\" href=\"openmls/ciphersuite/signature/struct.SignaturePublicKey.html\" title=\"struct openmls::ciphersuite::signature::SignaturePublicKey\">SignaturePublicKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/credentials/errors/enum.CredentialError.html\" title=\"enum openmls::credentials::errors::CredentialError\">CredentialError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/credentials/enum.MlsCredentialType.html\" title=\"enum openmls::credentials::MlsCredentialType\">MlsCredentialType</a>&gt; for <a class=\"struct\" href=\"openmls/credentials/struct.Credential.html\" title=\"struct openmls::credentials::Credential\">Credential</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/extensions/errors/enum.ExtensionError.html\" title=\"enum openmls::extensions::errors::ExtensionError\">ExtensionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.ErrorString.html\" title=\"struct openmls::error::ErrorString\">ErrorString</a>&gt; for <a class=\"enum\" href=\"openmls/extensions/errors/enum.ExtensionError.html\" title=\"enum openmls::extensions::errors::ExtensionError\">ExtensionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/extensions/errors/enum.CapabilitiesExtensionError.html\" title=\"enum openmls::extensions::errors::CapabilitiesExtensionError\">CapabilitiesExtensionError</a>&gt; for <a class=\"enum\" href=\"openmls/extensions/errors/enum.ExtensionError.html\" title=\"enum openmls::extensions::errors::ExtensionError\">ExtensionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/extensions/errors/enum.LifetimeExtensionError.html\" title=\"enum openmls::extensions::errors::LifetimeExtensionError\">LifetimeExtensionError</a>&gt; for <a class=\"enum\" href=\"openmls/extensions/errors/enum.ExtensionError.html\" title=\"enum openmls::extensions::errors::ExtensionError\">ExtensionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/extensions/errors/enum.KeyPackageIdError.html\" title=\"enum openmls::extensions::errors::KeyPackageIdError\">KeyPackageIdError</a>&gt; for <a class=\"enum\" href=\"openmls/extensions/errors/enum.ExtensionError.html\" title=\"enum openmls::extensions::errors::ExtensionError\">ExtensionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/extensions/errors/enum.ParentHashError.html\" title=\"enum openmls::extensions::errors::ParentHashError\">ParentHashError</a>&gt; for <a class=\"enum\" href=\"openmls/extensions/errors/enum.ExtensionError.html\" title=\"enum openmls::extensions::errors::ExtensionError\">ExtensionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/extensions/errors/enum.RatchetTreeError.html\" title=\"enum openmls::extensions::errors::RatchetTreeError\">RatchetTreeError</a>&gt; for <a class=\"enum\" href=\"openmls/extensions/errors/enum.ExtensionError.html\" title=\"enum openmls::extensions::errors::ExtensionError\">ExtensionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/extensions/errors/enum.InvalidExtensionError.html\" title=\"enum openmls::extensions::errors::InvalidExtensionError\">InvalidExtensionError</a>&gt; for <a class=\"enum\" href=\"openmls/extensions/errors/enum.ExtensionError.html\" title=\"enum openmls::extensions::errors::ExtensionError\">ExtensionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/framing/struct.MlsMessageOut.html\" title=\"struct openmls::framing::MlsMessageOut\">MlsMessageOut</a>&gt; for <a class=\"struct\" href=\"openmls/framing/struct.MlsMessageIn.html\" title=\"struct openmls::framing::MlsMessageIn\">MlsMessageIn</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/framing/errors/enum.MessageDecryptionError.html\" title=\"enum openmls::framing::errors::MessageDecryptionError\">MessageDecryptionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/framing/errors/enum.SecretTreeError.html\" title=\"enum openmls::framing::errors::SecretTreeError\">SecretTreeError</a>&gt; for <a class=\"enum\" href=\"openmls/framing/errors/enum.MessageDecryptionError.html\" title=\"enum openmls::framing::errors::MessageDecryptionError\">MessageDecryptionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/framing/errors/enum.SenderError.html\" title=\"enum openmls::framing::errors::SenderError\">SenderError</a>&gt; for <a class=\"enum\" href=\"openmls/framing/errors/enum.MessageDecryptionError.html\" title=\"enum openmls::framing::errors::MessageDecryptionError\">MessageDecryptionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/framing/errors/enum.SenderError.html\" title=\"enum openmls::framing::errors::SenderError\">SenderError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/framing/errors/enum.MlsMessageError.html\" title=\"enum openmls::framing::errors::MlsMessageError\">MlsMessageError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/enum.OutgoingWireFormatPolicy.html\" title=\"enum openmls::group::OutgoingWireFormatPolicy\">OutgoingWireFormatPolicy</a>&gt; for <a class=\"enum\" href=\"openmls/framing/enum.WireFormat.html\" title=\"enum openmls::framing::WireFormat\">WireFormat</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.NewGroupError.html\" title=\"enum openmls::group::errors::NewGroupError\">NewGroupError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.MlsGroupStateError.html\" title=\"enum openmls::group::errors::MlsGroupStateError\">MlsGroupStateError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ProcessMessageError.html\" title=\"enum openmls::group::errors::ProcessMessageError\">ProcessMessageError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.ValidationError.html\" title=\"enum openmls::group::errors::ValidationError\">ValidationError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ProcessMessageError.html\" title=\"enum openmls::group::errors::ProcessMessageError\">ProcessMessageError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.MlsGroupStateError.html\" title=\"enum openmls::group::errors::MlsGroupStateError\">MlsGroupStateError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ProcessMessageError.html\" title=\"enum openmls::group::errors::ProcessMessageError\">ProcessMessageError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.StageCommitError.html\" title=\"enum openmls::group::errors::StageCommitError\">StageCommitError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ProcessMessageError.html\" title=\"enum openmls::group::errors::ProcessMessageError\">ProcessMessageError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.CreateMessageError.html\" title=\"enum openmls::group::errors::CreateMessageError\">CreateMessageError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.MlsGroupStateError.html\" title=\"enum openmls::group::errors::MlsGroupStateError\">MlsGroupStateError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.CreateMessageError.html\" title=\"enum openmls::group::errors::CreateMessageError\">CreateMessageError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.AddMembersError.html\" title=\"enum openmls::group::errors::AddMembersError\">AddMembersError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.EmptyInputError.html\" title=\"enum openmls::group::errors::EmptyInputError\">EmptyInputError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.AddMembersError.html\" title=\"enum openmls::group::errors::AddMembersError\">AddMembersError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.CreateCommitError.html\" title=\"enum openmls::group::errors::CreateCommitError\">CreateCommitError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.AddMembersError.html\" title=\"enum openmls::group::errors::AddMembersError\">AddMembersError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.MlsGroupStateError.html\" title=\"enum openmls::group::errors::MlsGroupStateError\">MlsGroupStateError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.AddMembersError.html\" title=\"enum openmls::group::errors::AddMembersError\">AddMembersError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ProposeAddMemberError.html\" title=\"enum openmls::group::errors::ProposeAddMemberError\">ProposeAddMemberError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.MlsGroupStateError.html\" title=\"enum openmls::group::errors::MlsGroupStateError\">MlsGroupStateError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ProposeAddMemberError.html\" title=\"enum openmls::group::errors::ProposeAddMemberError\">ProposeAddMemberError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ProposeRemoveMemberError.html\" title=\"enum openmls::group::errors::ProposeRemoveMemberError\">ProposeRemoveMemberError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.MlsGroupStateError.html\" title=\"enum openmls::group::errors::MlsGroupStateError\">MlsGroupStateError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ProposeRemoveMemberError.html\" title=\"enum openmls::group::errors::ProposeRemoveMemberError\">ProposeRemoveMemberError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.RemoveMembersError.html\" title=\"enum openmls::group::errors::RemoveMembersError\">RemoveMembersError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.EmptyInputError.html\" title=\"enum openmls::group::errors::EmptyInputError\">EmptyInputError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.RemoveMembersError.html\" title=\"enum openmls::group::errors::RemoveMembersError\">RemoveMembersError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.CreateCommitError.html\" title=\"enum openmls::group::errors::CreateCommitError\">CreateCommitError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.RemoveMembersError.html\" title=\"enum openmls::group::errors::RemoveMembersError\">RemoveMembersError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.MlsGroupStateError.html\" title=\"enum openmls::group::errors::MlsGroupStateError\">MlsGroupStateError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.RemoveMembersError.html\" title=\"enum openmls::group::errors::RemoveMembersError\">RemoveMembersError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.LeaveGroupError.html\" title=\"enum openmls::group::errors::LeaveGroupError\">LeaveGroupError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.MlsGroupStateError.html\" title=\"enum openmls::group::errors::MlsGroupStateError\">MlsGroupStateError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.LeaveGroupError.html\" title=\"enum openmls::group::errors::LeaveGroupError\">LeaveGroupError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.SelfUpdateError.html\" title=\"enum openmls::group::errors::SelfUpdateError\">SelfUpdateError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.CreateCommitError.html\" title=\"enum openmls::group::errors::CreateCommitError\">CreateCommitError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.SelfUpdateError.html\" title=\"enum openmls::group::errors::SelfUpdateError\">SelfUpdateError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.MlsGroupStateError.html\" title=\"enum openmls::group::errors::MlsGroupStateError\">MlsGroupStateError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.SelfUpdateError.html\" title=\"enum openmls::group::errors::SelfUpdateError\">SelfUpdateError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ProposeSelfUpdateError.html\" title=\"enum openmls::group::errors::ProposeSelfUpdateError\">ProposeSelfUpdateError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.MlsGroupStateError.html\" title=\"enum openmls::group::errors::MlsGroupStateError\">MlsGroupStateError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ProposeSelfUpdateError.html\" title=\"enum openmls::group::errors::ProposeSelfUpdateError\">ProposeSelfUpdateError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.CommitToPendingProposalsError.html\" title=\"enum openmls::group::errors::CommitToPendingProposalsError\">CommitToPendingProposalsError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.CreateCommitError.html\" title=\"enum openmls::group::errors::CreateCommitError\">CreateCommitError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.CommitToPendingProposalsError.html\" title=\"enum openmls::group::errors::CommitToPendingProposalsError\">CommitToPendingProposalsError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.MlsGroupStateError.html\" title=\"enum openmls::group::errors::MlsGroupStateError\">MlsGroupStateError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.CommitToPendingProposalsError.html\" title=\"enum openmls::group::errors::CommitToPendingProposalsError\">CommitToPendingProposalsError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ExportPublicGroupStateError.html\" title=\"enum openmls::group::errors::ExportPublicGroupStateError\">ExportPublicGroupStateError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.MlsGroupStateError.html\" title=\"enum openmls::group::errors::MlsGroupStateError\">MlsGroupStateError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ExportPublicGroupStateError.html\" title=\"enum openmls::group::errors::ExportPublicGroupStateError\">ExportPublicGroupStateError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ExportSecretError.html\" title=\"enum openmls::group::errors::ExportSecretError\">ExportSecretError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.MlsGroupStateError.html\" title=\"enum openmls::group::errors::MlsGroupStateError\">MlsGroupStateError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ExportSecretError.html\" title=\"enum openmls::group::errors::ExportSecretError\">ExportSecretError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/enum.PendingCommitState.html\" title=\"enum openmls::group::PendingCommitState\">PendingCommitState</a>&gt; for <a class=\"struct\" href=\"openmls/group/struct.StagedCommit.html\" title=\"struct openmls::group::StagedCommit\">StagedCommit</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.WelcomeError.html\" title=\"enum openmls::group::errors::WelcomeError\">WelcomeError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/treesync/errors/enum.PublicTreeError.html\" title=\"enum openmls::treesync::errors::PublicTreeError\">PublicTreeError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.WelcomeError.html\" title=\"enum openmls::group::errors::WelcomeError\">WelcomeError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ExternalCommitError.html\" title=\"enum openmls::group::errors::ExternalCommitError\">ExternalCommitError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/treesync/errors/enum.PublicTreeError.html\" title=\"enum openmls::treesync::errors::PublicTreeError\">PublicTreeError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ExternalCommitError.html\" title=\"enum openmls::group::errors::ExternalCommitError\">ExternalCommitError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.StageCommitError.html\" title=\"enum openmls::group::errors::StageCommitError\">StageCommitError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.ProposalValidationError.html\" title=\"enum openmls::group::errors::ProposalValidationError\">ProposalValidationError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.StageCommitError.html\" title=\"enum openmls::group::errors::StageCommitError\">StageCommitError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/schedule/errors/enum.PskError.html\" title=\"enum openmls::schedule::errors::PskError\">PskError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.StageCommitError.html\" title=\"enum openmls::group::errors::StageCommitError\">StageCommitError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.ExternalCommitValidationError.html\" title=\"enum openmls::group::errors::ExternalCommitValidationError\">ExternalCommitValidationError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.StageCommitError.html\" title=\"enum openmls::group::errors::StageCommitError\">StageCommitError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/treesync/errors/enum.ApplyUpdatePathError.html\" title=\"enum openmls::treesync::errors::ApplyUpdatePathError\">ApplyUpdatePathError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.StageCommitError.html\" title=\"enum openmls::group::errors::StageCommitError\">StageCommitError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.CreateCommitError.html\" title=\"enum openmls::group::errors::CreateCommitError\">CreateCommitError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/schedule/errors/enum.PskError.html\" title=\"enum openmls::schedule::errors::PskError\">PskError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.CreateCommitError.html\" title=\"enum openmls::group::errors::CreateCommitError\">CreateCommitError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/group/errors/enum.ProposalValidationError.html\" title=\"enum openmls::group::errors::ProposalValidationError\">ProposalValidationError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.CreateCommitError.html\" title=\"enum openmls::group::errors::CreateCommitError\">CreateCommitError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ValidationError.html\" title=\"enum openmls::group::errors::ValidationError\">ValidationError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/framing/errors/enum.MessageDecryptionError.html\" title=\"enum openmls::framing::errors::MessageDecryptionError\">MessageDecryptionError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ValidationError.html\" title=\"enum openmls::group::errors::ValidationError\">ValidationError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ProposalValidationError.html\" title=\"enum openmls::group::errors::ProposalValidationError\">ProposalValidationError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/group/errors/enum.ExternalCommitValidationError.html\" title=\"enum openmls::group::errors::ExternalCommitValidationError\">ExternalCommitValidationError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.65.0/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"openmls/group/struct.GroupEpoch.html\" title=\"struct openmls::group::GroupEpoch\">GroupEpoch</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/key_packages/errors/enum.KeyPackageVerifyError.html\" title=\"enum openmls::key_packages::errors::KeyPackageVerifyError\">KeyPackageVerifyError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/key_packages/errors/enum.KeyPackageNewError.html\" title=\"enum openmls::key_packages::errors::KeyPackageNewError\">KeyPackageNewError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/key_packages/errors/enum.KeyPackageBundleNewError.html\" title=\"enum openmls::key_packages::errors::KeyPackageBundleNewError\">KeyPackageBundleNewError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/extensions/errors/enum.ExtensionError.html\" title=\"enum openmls::extensions::errors::ExtensionError\">ExtensionError</a>&gt; for <a class=\"enum\" href=\"openmls/key_packages/errors/enum.KeyPackageBundleNewError.html\" title=\"enum openmls::key_packages::errors::KeyPackageBundleNewError\">KeyPackageBundleNewError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.65.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.65.0/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.65.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"openmls/messages/proposals/struct.ExternalInitProposal.html\" title=\"struct openmls::messages::proposals::ExternalInitProposal\">ExternalInitProposal</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/schedule/errors/enum.PskError.html\" title=\"enum openmls::schedule::errors::PskError\">PskError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/key_packages/struct.KeyPackage.html\" title=\"struct openmls::key_packages::KeyPackage\">KeyPackage</a>&gt; for <a class=\"struct\" href=\"openmls/treesync/struct.LeafNode.html\" title=\"struct openmls::treesync::LeafNode\">LeafNode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(VLBytes, VLBytes)&gt; for <a class=\"struct\" href=\"openmls/treesync/struct.ParentNode.html\" title=\"struct openmls::treesync::ParentNode\">ParentNode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;VLBytes&gt; for <a class=\"struct\" href=\"openmls/treesync/struct.ParentNode.html\" title=\"struct openmls::treesync::ParentNode\">ParentNode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"openmls/error/struct.LibraryError.html\" title=\"struct openmls::error::LibraryError\">LibraryError</a>&gt; for <a class=\"enum\" href=\"openmls/treesync/errors/enum.ApplyUpdatePathError.html\" title=\"enum openmls::treesync::errors::ApplyUpdatePathError\">ApplyUpdatePathError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"openmls/framing/errors/enum.SecretTreeError.html\" title=\"enum openmls::framing::errors::SecretTreeError\">SecretTreeError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"openmls/prelude/enum.CryptoError.html\" title=\"enum openmls::prelude::CryptoError\">CryptoError</a>&gt; for <a class=\"enum\" href=\"openmls/framing/errors/enum.SecretTreeError.html\" title=\"enum openmls::framing::errors::SecretTreeError\">SecretTreeError</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()